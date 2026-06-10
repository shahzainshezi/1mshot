from PIL import Image
import numpy as np
import os

path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\nike_logo.png"
if os.path.exists(path):
    with Image.open(path) as img:
        img_np = np.array(img)
        if img_np.shape[2] == 4:
            alpha = img_np[:, :, 3]
            # Find coordinates of solid pixels
            mask = alpha > 50
            if np.sum(mask) > 0:
                r = img_np[:, :, 0][mask]
                g = img_np[:, :, 1][mask]
                b = img_np[:, :, 2][mask]
                print(f"Average color of logo pixels: R={r.mean():.1f}, G={g.mean():.1f}, B={b.mean():.1f}")
            else:
                print("No solid pixels found")
        else:
            print("No alpha channel")
else:
    print("nike_logo not found")
