#!/usr/bin/env python3
from pathlib import Path
import re


emoji_pattern = re.compile(
    "["
    "\U0001F600-\U0001F64F"  # emoticons
    "\U0001F300-\U0001F5FF"  # symbols & pictographs
    "\U0001F680-\U0001F6FF"  # transport & map
    "\U0001F1E0-\U0001F1FF"  # flags (iOS)
    "\u2600-\u26FF"  # miscellaneous symbols
    "\u2700-\u27BF"
    "]+",
    flags=re.UNICODE,
)

# Matches sequences like "Ver Productos" (two or more words starting with uppercase)
title_pattern = re.compile(r"\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+)\b")


def fix_phrase(match: re.Match) -> str:
    phrase = match.group(0)
    parts = phrase.split()
    if len(parts) <= 1:
        return phrase
    first = parts[0]
    rest = " ".join(p.lower() for p in parts[1:])
    return f"{first} {rest}"


def process_text_segment(text: str) -> str:
    # Remove emojis
    t = emoji_pattern.sub("", text)
    # Replace title-case sequences like "Ver Productos" -> "Ver productos"
    t = title_pattern.sub(lambda m: fix_phrase(m), t)
    return t


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    parts = re.split(r'(<[^>]+>)', original)
    changed = False
    for i in range(0, len(parts)):
        # tags are in odd positions after the split
        if i % 2 == 0:
            seg = parts[i]
            new_seg = process_text_segment(seg)
            if new_seg != seg:
                parts[i] = new_seg
                changed = True
    if changed:
        path.write_text("".join(parts), encoding="utf-8")
    return changed


def main():
    root = Path(__file__).resolve().parents[1]
    html_files = list(root.rglob("*.html"))
    changed_files = []
    for f in html_files:
        try:
            if process_file(f):
                changed_files.append(str(f.relative_to(root)))
        except Exception as e:
            print(f"Error processing {f}: {e}")

    print("Processed {} HTML files.".format(len(html_files)))
    if changed_files:
        print("Modified files:")
        for cf in changed_files:
            print(" - " + cf)
    else:
        print("No changes made.")


if __name__ == '__main__':
    main()
