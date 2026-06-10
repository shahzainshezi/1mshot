from PIL import Image
import numpy as np
import os

images_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"
files = ["image_69_extracted.png", "image_68_extracted.png", "mask_group_8_extracted.png", "image_66_extracted.png"]

for f in files:
    path = os.path.join(images_dir, f)
    if os.path.exists(path):
        with Image.open(path) as img:
            img_np = np.array(img)
            # Find non-transparent pixels
            alpha = img_np[:, :, 3]
            coords = np.argwhere(alpha > 10)
            if coords.size > 0:
                y_min, x_min = coords.min(axis=0)
                y_max, x_max = coords.max(axis=0)
                
                # Check for orange pixels (Gatorade lightning bolt: G in 80-140, R > 200, B < 50)
                r, g, b = img_np[:, :, 0], img_np[:, :, 1], img_np[:, :, 2]
                orange_mask = (r > 200) & (g > 80) & (g < 160) & (b < 80) & (alpha > 100)
                has_orange = np.sum(orange_mask) > 50
                
                # Check for green pixels (Glow bar: G > 150, R < 100, B < 150)
                green_mask = (g > 150) & (r < 100) & (b < 150) & (alpha > 100)
                has_green = np.sum(green_mask) > 50
                
                print(f"{f}: Bounding Box = {x_max-x_min}x{y_max-y_min}, Orange = {has_orange}, Green = {has_green}")
            else:
                print(f"{f} is fully transparent")
