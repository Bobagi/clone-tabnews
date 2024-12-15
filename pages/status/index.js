import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt></UpdatedAt>
      <br />
      <DatabaseStatus></DatabaseStatus>
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  let updateAtText = "Loading...";

  if (!isLoading && data) {
    const updatedAt = new Date(data.updated_at);
    updateAtText = updatedAt.toLocaleString();
  }

  return <div>Last Update: {updateAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  let version = "Loading...";
  let max_connections = "Loading...";
  let opened_connections = "Loading...";

  if (!isLoading && data) {
    const database = data.dependecies.database;
    version = database.version.toString();
    max_connections = database.max_connections.toString();
    opened_connections = database.opened_connections.toString();
  }

  return (
    <>
      <h2>Database</h2>
      <div>Version: {version}</div>
      <div>Max Connections: {max_connections}</div>
      <div>Opened Connections: {opened_connections}</div>
    </>
  );
}
