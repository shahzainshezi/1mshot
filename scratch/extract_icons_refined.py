from PIL import Image
import numpy as np
import os

img_path = r"C:\Users\HAJI LAPTOP g55\Downloads\Frame 143.png"
out_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"

if not os.path.exists(img_path):
    print("Frame 143.png not found")
    exit()

img = Image.open(img_path)
width, height = img.size
img_np = np.array(img)

col_width = width // 4

# Search ONLY between Y = 1400 and Y = 1900
y_start, y_end = 1400, 1900
sub_img = img_np[y_start:y_end, :, :]

r, g, b = sub_img[:, :, 0], sub_img[:, :, 1], sub_img[:, :, 2]
green_mask = (g > 100) & (r < 80) & (b < 120)

for i in range(4):
    col_mask = green_mask[:, i*col_width : (i+1)*col_width]
    coords = np.argwhere(col_mask)
    if coords.size > 0:
        # Centroid of green pixels in this column
        y_center = int(coords[:, 0].mean()) + y_start
        x_center = int(coords[:, 1].mean()) + i*col_width
        print(f"Col {i}: Centroid at X={x_center}, Y={y_center}")
        
        box_size = 160
        left = max(0, x_center - box_size // 2)
        top = max(0, y_center - box_size // 2)
        right = min(width, left + box_size)
        bottom = min(height, top + box_size)
        
        cropped = img.crop((left, top, right, bottom))
        out_name = f"partner_cat_icon_{i}.png"
        cropped.save(os.path.join(out_dir, out_name))
        print(f"Saved {out_name} to {out_dir}")
    else:
        print(f"Col {i}: No green pixels found in Y=[{y_start}, {y_end}]")
