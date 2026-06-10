import os
import re
import base64
from PIL import Image
import io

images_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"
files = ["image_69.svg", "image_68.svg", "mask_group_8.svg", "image_66.svg"]

for f in files:
    path = os.path.join(images_dir, f)
    with open(path, "r", encoding="utf-8") as file:
        content = file.read()
    
    match = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]+)', content)
    if match:
        base64_data = match.group(1)
        img_data = base64.b64decode(base64_data)
        img = Image.open(io.BytesIO(img_data))
        print(f"{f}: Embedded PNG size={img.size}, mode={img.mode}")
        
        # Save the extracted PNG to inspect/use directly if needed
        png_path = os.path.join(images_dir, f.replace(".svg", "_extracted.png"))
        img.save(png_path)
        print(f"  Saved extracted PNG to {png_path}")
    else:
        print(f"{f}: No base64 image data found")
