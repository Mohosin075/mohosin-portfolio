export async function loadProjects(signal) {
  const response = await fetch("/projects.json", { signal });
  if (!response.ok) throw new Error("Could not load projects");
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error("Invalid project data");
  return data;
}
