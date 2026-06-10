from PIL import Image
import numpy as np

im = Image.open(r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\miss100_mobile_player_bg.png")
arr = np.array(im.convert("RGB"))
# Check Y range of pixels with RGB sum > 100 (non-black)
sum_rgb = arr.sum(axis=2)
y_indices, x_indices = np.where(sum_rgb > 100)
if len(y_indices) > 0:
    print(f"Non-black pixels found. Y range: {y_indices.min()} to {y_indices.max()} out of total height {im.size[1]}")
else:
    print("No non-black pixels found")
