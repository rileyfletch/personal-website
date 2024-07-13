"""
Blog post creator script
"""
import sys
import os
from pathlib import Path

def check_folder(name: str):
    path = Path('app') / '(posts)' / name
    
    if path.exists() and path.is_dir():
        print(f'Folder "{path}" exists.')
    else:
        print(f'Folder "{path}" does not exist.')
        os.mkdir(path)
        print(f'Folder "{path}" has been created.')


def create_post(name: str):
    check_folder(name)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <folder_name>")
    else:
        create_post(sys.argv[1])