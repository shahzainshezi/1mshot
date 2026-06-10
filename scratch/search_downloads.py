import os
import glob
import sys

downloads_path = r"C:\Users\HAJI LAPTOP g55\Downloads"
final1_path = r"C:\Users\HAJI LAPTOP g55\Downloads\1MSHOT Final1 (1)"

# Reconfigure stdout to use utf-8 to prevent encoding crashes
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

print("=== Search in Downloads ===")
pattern = os.path.join(downloads_path, "*")
for f in glob.glob(pattern):
    try:
        name = os.path.basename(f)
        name_l = name.lower()
        if any(k in name_l for k in ["competition", "map", "usa", "ball", "player", "shot", "hoop"]):
            print(f"File: {name}, size: {os.path.getsize(f)} bytes")
    except Exception as e:
        print(f"Error reading file: {e}")

if os.path.exists(final1_path):
    print("\n=== Search in 1MSHOT Final1 (1) ===")
    for root, dirs, files in os.walk(final1_path):
        for f in files:
            try:
                print(f"File in Subdir: {f}, size: {os.path.getsize(os.path.join(root, f))} bytes")
            except Exception as e:
                print(f"Error: {e}")
