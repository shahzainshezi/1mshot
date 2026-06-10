import os
import xml.etree.ElementTree as ET

downloads_dir = r"C:\Users\HAJI LAPTOP g55\Downloads"
mask_files = [f for f in os.listdir(downloads_dir) if f.startswith("Mask group") and f.endswith(".svg")]

for f in sorted(mask_files):
    path = os.path.join(downloads_dir, f)
    try:
        tree = ET.parse(path)
        root = tree.getroot()
        # look for typical keyword inside path/rect tags or print size
        content_preview = ""
        # Let's print a small summary of tags
        tags = [elem.tag.split('}')[-1] for elem in root.iter()]
        print(f"{f}: Size={os.path.getsize(path)} bytes, Tags={set(tags)}")
    except Exception as e:
        print(f"Error reading {f}: {e}")
