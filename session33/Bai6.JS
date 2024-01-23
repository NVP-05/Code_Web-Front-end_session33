function Job(id, title, description, completed) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.completed = completed;
}
let jobs = [];

function addJob() {
  let id = prompt("Nhập ID công việc:");
  let title = prompt("Nhập tiêu đề công việc:");
  let description = prompt("Nhập mô tả công việc:");
  let completed =
    prompt("Công việc đã hoàn thành (true/false):").toLowerCase() === "true";

  let newJob = new Job(id, title, description, completed);
  jobs.push(newJob);
  console.log("Công việc đã được thêm mới!");
}

function displayJobs() {
  console.log("Danh sách công việc:");
  jobs.forEach(function (job) {
    console.log(
      `ID: ${job.id}, Tiêu đề: ${job.title}, Mô tả: ${job.description}, Hoàn thành: ${job.completed}`
    );
  });
}

function searchJobById() {
  let searchId = prompt("Nhập ID công việc cần tìm kiếm:");
  let foundJob = jobs.find(function (job) {
    return job.id === searchId;
  });

  if (foundJob) {
    console.log("Công việc được tìm thấy:");
    console.log(
      `ID: ${foundJob.id}, Tiêu đề: ${foundJob.title}, Mô tả: ${foundJob.description}, Hoàn thành: ${foundJob.completed}`
    );
  } else {
    console.log("Không tìm thấy công việc với ID đã nhập.");
  }
}

while (true) {
  let choice = prompt(
    "Chọn 1: Thêm mới công việc | Chọn 2: Hiển thị danh sách công việc | Chọn 3: Tìm kiếm công việc theo ID | Chọn 4: Thoát"
  );

  switch (choice) {
    case "1":
      addJob();
      break;
    case "2":
      displayJobs();
      break;
    case "3":
      searchJobById();
      break;
    case "4":
      console.log("Chương trình đã kết thúc.");
      process.exit();
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
  }
}
