enum JEvent {
  // event
  EVENT_UPDATE_ROOM,
  EVENT_UPDATE_ONLINE,
  EVENT_NEW_DANMU,
  EVENT_NEW_GIFT,
  EVENT_NEW_GUARD,
  EVENT_NEW_SUPER_CHAT,
  EVENT_WINDOW_READY,
  EVENT_STORE_WATCH,
  // invoke
  INVOKE_REQUEST_GIFT_DATA,
  INVOKE_WINDOW_MINIMIZE,
  INVOKE_STORE_GET,
  INVOKE_STORE_SET,
  INVOKE_STORE_REGISTER,
}

export default JEvent
