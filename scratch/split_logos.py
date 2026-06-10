from PIL import Image
import os

img_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\group_6.png"
out_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"

if not os.path.exists(img_path):
    print("group_6.png not found")
    exit()

img = Image.open(img_path)
width, height = img.size

# Split into 5 equal horizontal columns
col_width = width // 5

for i in range(5):
    left = i * col_width
    top = 0
    right = (i + 1) * col_width
    bottom = height
    
    cropped = img.crop((left, top, right, bottom))
    # Crop extra padding if needed, but keeping full 320x208 preserves the original layout spacing.
    out_name = f"partner_logo_{i}.png"
    cropped.save(os.path.join(out_dir, out_name))
    print(f"Saved {out_name} to {out_dir}")
