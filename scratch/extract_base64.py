import os
import re
from PIL import Image
import io
import base64

downloads_dir = r"C:\Users\HAJI LAPTOP g55\Downloads"
mask_files = [f for f in os.listdir(downloads_dir) if f.startswith("Mask group") and f.endswith(".svg")]

for f in sorted(mask_files):
    path = os.path.join(downloads_dir, f)
    try:
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
        
        # Find base64 image data
        match = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]+)', content)
        if match:
            base64_data = match.group(1)
            img_data = base64.b64decode(base64_data)
            img = Image.open(io.BytesIO(img_data))
            # Let's save a thumbnail or print details
            print(f"{f}: Embedded PNG size={img.size}, mode={img.mode}")
        else:
            print(f"{f}: No embedded base64 PNG found")
    except Exception as e:
        print(f"Error processing {f}: {e}")
