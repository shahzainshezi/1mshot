import os

dir_path = r"C:\Users\HAJI LAPTOP g55\Downloads\1MSHOT Final1 (1)"
svg_files = ["Mask group.svg", "Mask group-1.svg", "Mask group-2.svg"]

if os.path.exists(dir_path):
    print(f"Directory exists: {dir_path}")
    for f in svg_files:
        path = os.path.join(dir_path, f)
        print(f"  {f} exists: {os.path.exists(path)}, size: {os.path.getsize(path) if os.path.exists(path) else 0} bytes")
else:
    print(f"Directory not found: {dir_path}")
