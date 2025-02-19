const url = "https://content.safeblock.com/tokens-manifest.json";
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  console.log(json);
} catch (error) {
  console.error(error.message);
}
