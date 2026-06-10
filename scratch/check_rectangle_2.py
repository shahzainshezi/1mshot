import os

path = r"C:\Users\HAJI LAPTOP g55\Downloads\Rectangle 22 (2).svg"
if os.path.exists(path):
    print(f"Rectangle 22 (2).svg size: {os.path.getsize(path)} bytes")
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        print("Content:")
        print(f.read()[:500])
else:
    print("Rectangle 22 (2).svg not found in Downloads")
