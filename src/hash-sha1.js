const plain = 'sample text';

async function SHA1(msg){
  return crypto.subtle.digest('SHA-1', new TextEncoder('utf-8').encode(msg));
}

function byteToHex(buf){
  return (Array.from(new Uint8Array(buf))).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function byteToBase64(buf){
  return btoa(String.fromCharCode.apply(null, new Uint8Array(buf)));
}