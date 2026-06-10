import re
import base64
import os

svg_path = r"C:\Users\HAJI LAPTOP g55\Downloads\1MSHOTArtboard 7 2.svg"
out_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\scratch\artboard_decoded.png"

if os.path.exists(svg_path):
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', content)
    if match:
        img_data = base64.b64decode(match.group(1))
        with open(out_path, 'wb') as out_f:
            out_f.write(img_data)
        print(f"Decoded to {out_path}")
    else:
        print("Base64 not found")
else:
    print("File not found")
