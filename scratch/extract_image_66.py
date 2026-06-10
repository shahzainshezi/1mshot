import re
import base64
import os

svg_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\image_66.svg"
out_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\scratch\image_66_decoded.png"

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find base64 pattern
match = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', content)
if match:
    img_data = base64.b64decode(match.group(1))
    with open(out_path, 'wb') as out_f:
        out_f.write(img_data)
    print(f"Successfully decoded and saved to {out_path}")
else:
    print("Base64 not found in SVG")
