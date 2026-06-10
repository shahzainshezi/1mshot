import os

downloads = r"C:\Users\HAJI LAPTOP g55\Downloads"
files = os.listdir(downloads)

img_extensions = ('.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp')
img_files = [f for f in files if f.lower().endswith(img_extensions)]

for f in sorted(img_files):
    path = os.path.join(downloads, f)
    print(f"{f}: {os.path.getsize(path)} bytes")
