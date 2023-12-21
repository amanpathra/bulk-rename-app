# Bulk Renaming App
This is a simple bulk renaming app created using Node.js's fs library. The project provides an easy-to-use solution for renaming multiple files in a directory simultaneously.

## How to Use
1. Clone the repository to your local machine:
```
git clone https://github.com/amanpathra/bulk-rename-app.git
```
2. Navigate to the project directory:
```
cd bulk-rename-app
```
3. Install the necessary dependencies:
```
npm i
```
4. Open the index.js file in your preferred text editor.
5. Update the following variables in the index.js file:
   replaceThis: Set this variable to the current name of the files you want to rename.
   replaceWith: Set this variable to the desired new name for the files.
6. Save the changes in the index.js file.
7. Run the rename.bat file to execute the bulk renaming process.

## How It Works
- The app uses Node.js's fs library to read the files in the specified directory.
- It identifies files with the specified current name (replaceThis) and renames them with the desired new name (replaceWith).
- The rename.bat file is a batch script that runs the Node.js application with a single command.

## Contributing
Feel free to contribute to the project by submitting issues or pull requests. Your feedback and contributions are highly appreciated!

## Acknowledgments
Special thanks to the Node.js community for providing powerful libraries like fs for file system operations.
