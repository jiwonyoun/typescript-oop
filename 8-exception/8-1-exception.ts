// Java : Exception
// JavaScript : Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (!fileName) {
    throw new Error(`file ${fileName} is not exist`);
  }
  return `file contents : ${fileName}`;
}

function closeFile(fileName: string) {
  console.log("closed file");
}

const fileName = "";

function run() {
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log("error catched.");
    return;
  } finally {
    closeFile(fileName);
  }
  console.log("😜");
}

run();
