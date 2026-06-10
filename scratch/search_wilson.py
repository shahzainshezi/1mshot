import os

downloads = r"C:\Users\HAJI LAPTOP g55\Downloads"
workspace = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot"

print("--- SVG Files in Downloads ---")
for f in os.listdir(downloads):
    if f.lower().endswith('.svg'):
        safe_name = f.encode('ascii', errors='ignore').decode('ascii')
        print(safe_name)

print("--- Files in Downloads matching wilson ---")
for f in os.listdir(downloads):
    if "wilson" in f.lower():
        safe_name = f.encode('ascii', errors='ignore').decode('ascii')
        print(safe_name)

print("--- Files in Downloads matching image or mask or group ---")
for f in os.listdir(downloads):
    if any(k in f.lower() for k in ["image", "mask", "group", "logo"]):
        safe_name = f.encode('ascii', errors='ignore').decode('ascii')
        print(safe_name)
