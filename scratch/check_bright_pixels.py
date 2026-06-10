from PIL import Image
import numpy as np

im = Image.open(r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\hero_mobile_bg.png")
arr = np.array(im.convert("RGB"))
max_rgb = arr[:1000, :, :].max(axis=(0,1))
print("Max RGB in top 1000px:", max_rgb)
# Find pixels where sum of RGB is highest
sum_rgb = arr[:1000, :, :].sum(axis=2)
y_indices, x_indices = np.where(sum_rgb > 300)
if len(y_indices) > 0:
    print(f"Pixels with RGB sum > 300 found. Y range: {y_indices.min()} to {y_indices.max()}")
else:
    print("No pixels with RGB sum > 300 found")
