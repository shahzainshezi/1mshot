from PIL import Image
import numpy as np
import os

path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\nike_logo.png"

if os.path.exists(path):
    img = Image.open(path)
    img_np = np.array(img)
    
    if img_np.shape[2] == 4:
        # Convert all pixels with positive alpha to solid white (R=255, G=255, B=255)
        # keeping the original alpha channel transparency
        alpha = img_np[:, :, 3]
        mask = alpha > 10
        img_np[mask, 0] = 255
        img_np[mask, 1] = 255
        img_np[mask, 2] = 255
        
        out_img = Image.fromarray(img_np)
        out_img.save(path)
        print("Updated nike_logo.png with white pixels successfully!")
    else:
        print("Image doesn't have an alpha channel")
else:
    print("nike_logo.png not found")
