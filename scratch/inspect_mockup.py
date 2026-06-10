from PIL import Image
import os

path = r"C:\Users\HAJI LAPTOP g55\.gemini\antigravity-ide\brain\b8699fe3-fa03-4ec8-966b-41ad7184d168\media__1781006929718.png"
if os.path.exists(path):
    with Image.open(path) as img:
        print(f"Mockup size: {img.size}, mode: {img.mode}")
else:
    print("Mockup not found")
