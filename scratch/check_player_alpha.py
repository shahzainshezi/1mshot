from PIL import Image
import numpy as np

im = Image.open(r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\miss100_player.png")
# Check alpha channel to find the bounding box of the player
arr = np.array(im)
if arr.shape[2] == 4: # RGBA
    alpha = arr[:, :, 3]
    y_indices, x_indices = np.where(alpha > 0)
    if len(y_indices) > 0:
        print(f"Player pixels found. Y range: {y_indices.min()} to {y_indices.max()} out of total height {im.size[1]}")
        print(f"Top transparent space: {y_indices.min()} pixels")
    else:
        print("No non-transparent pixels found")
else:
    print("Image is not RGBA")
