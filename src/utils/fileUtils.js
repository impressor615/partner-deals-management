export const readAsDataURL = file => (
  new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (e) => {
      reject(e);
    };
    reader.readAsDataURL(file);
  })
);

export default {};
