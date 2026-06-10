import os

downloads_path = r"C:\Users\HAJI LAPTOP g55\Downloads\Rectangle 22.svg"
if os.path.exists(downloads_path):
    print(f"Rectangle 22.svg size: {os.path.getsize(downloads_path)} bytes")
    with open(downloads_path, 'r', encoding='utf-8', errors='ignore') as f:
        print("Content:")
        print(f.read()[:500])
else:
    print("Rectangle 22.svg not found in Downloads")
