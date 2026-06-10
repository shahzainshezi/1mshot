import re
import base64
import os

svg_path = r"C:\Users\HAJI LAPTOP g55\Downloads\New-Logo.svg"
out_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\scratch\new_logo_decoded.png"

if os.path.exists(svg_path):
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all base64 patterns
    matches = re.findall(r'xlink:href="data:image/png;base64,([^"]+)"', content)
    print(f"Found {len(matches)} base64 images in New-Logo.svg")
    for idx, match in enumerate(matches):
        img_data = base64.b64decode(match)
        out_file = out_path.replace(".png", f"_{idx}.png")
        with open(out_file, 'wb') as out_f:
            out_f.write(img_data)
        print(f"Decoded index {idx} to {out_file}")
else:
    print("New-Logo.svg not found")
