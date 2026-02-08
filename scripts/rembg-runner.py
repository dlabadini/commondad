import sys

from rembg import remove


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python scripts/rembg-runner.py input.jpg output.png", file=sys.stderr)
        return 2

    input_path = sys.argv[1]
    output_path = sys.argv[2]

    with open(input_path, "rb") as f:
        input_bytes = f.read()

    output_bytes = remove(input_bytes)

    with open(output_path, "wb") as f:
        f.write(output_bytes)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

