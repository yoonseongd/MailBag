// IMAP.ts – Code that talks to an IMAP server to list mailboxes and
// messages and to retrieve messages. There will be a Worker class
// within this. That is what the rest of our application code will use,
// along with some interfaces we’ll need.           

//imap is internet message access protocol

// IMAP(Internet Message Access Protocol)는 응용 계층 인터넷 프로토콜 중 하나로, 원격 서버로부터 TCP/IP 연결을 통해 이메일을 가져오는데 사용된다. IMAP는 온라인 모드와 오프라인 모드를 모두 지원하므로 POP3를 사용할 때와 달리 이메일 메시지를 서버에 남겨 두었다가 나중에 지울 수 있다. 그러므로 다른 컴퓨터 환경에서 서로 다른 이메일 클라이언트가 같은 이메일을 받아올 수 있는 장점을 가지고 있다.
// 이메일 메시지는 서버로 보내져 받는 사람의 이메일 보관함에 저장된다. 사용자는 마이크로소프트 아웃룩, 모질라 선더버드 같은 메일 클라이언트를 사용하여 편지의 기본 헤더(제목, 송신자명, 이메일 주소 등)를 보고 메일 본문의 다운로드 여부를 정할 수도 있다. 하지만, POP3에 비해 IMAP는 메일 서버와의 통신 트래픽이 높은 단점을 가지고 있다.

