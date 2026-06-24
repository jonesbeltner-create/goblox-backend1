export async function onRequest(context) {
  const gobloxData = {
    server: "GoBlox API Gateway",
    status: "Active",
    engine: "Godot Engine",
    avatar_style: "R6 Classic"
  };

  return new Response(JSON.stringify(gobloxData), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    }
  });
}

