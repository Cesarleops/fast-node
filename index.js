import { execa } from "execa";

const start = async () => {
  await execa('echo', ['hello'], { shell: true });
}

start().catch(error => {
  console.error(error);
});
