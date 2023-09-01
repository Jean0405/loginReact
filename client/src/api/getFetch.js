const config = {
  headers: new Headers({
    "Content-Type": "application/json",
  }),
};

export const GetFetch = async (data) => {
  config.method = "POST";
  config.body = JSON.stringify(data);

  const dataObtained = await (
    await fetch("http://127.25.25.27:3300/auth/login", config)
  ).json();

  return dataObtained;
};
