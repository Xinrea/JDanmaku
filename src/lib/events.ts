enum JEvent {
  // event
  EVENT_UPDATE_ROOM,
  EVENT_UPDATE_ONLINE,
  EVENT_NEW_DANMU,
  EVENT_NEW_GIFT,
  EVENT_NEW_GUARD,
  EVENT_NEW_SUPER_CHAT,
  EVENT_NEW_INTERACT,
  EVENT_WINDOW_READY,
  EVENT_STORE_WATCH,
  EVENT_WINDOW_BLUR,
  EVENT_WINDOW_FOCUS,
  EVENT_LOG,
  EVENT_DETAIL_UPDATE,
  // invoke
  INVOKE_REQUEST_GIFT_DATA,
  INVOKE_WINDOW_MINIMIZE,
  INVOKE_WINDOW_ALWAYS_ON_TOP,
  INVOKE_WINDOW_MINIMIZABLE,
  INVOKE_WINDOW_HIDE,
  INVOKE_WINDOW_SHOW,
  INVOKE_WINDOW_DETAIL,
  INVOKE_STORE_GET,
  INVOKE_STORE_SET,
  INVOKE_STORE_REGISTER,
  INVOKE_APP_QUIT,
  INVOKE_QR_CODE,
  INVOKE_QR_CODE_UPDATE,
  INVOKE_LOGOUT,
  INVOKE_GET_USER_INFO,
  INVOKE_OPEN_URL,
  INVOKE_GET_ROOM_INFO,
  INVOKE_GET_FONT_LIST,
  INVOKE_GET_VERSION,
  INVOKE_OPEN_LOG_DIR,
  INVOKE_GET_LATEST_RELEASE,
  INVOKE_UPDATE_ROOM,
  INVOKE_SET_CLIPBOARD,
  INVOKE_GET_INIT_GIFTS,
  INVOKE_GET_INIT_SUPERCHATS,
  INVOKE_REMOVE_GIFT_ENTRY,
  INVOKE_CLEAR_GIFTS,
  INVOKE_CLEAR_SUPERCHATS,
  INVOKE_GET_GOALS,
  INVOKE_SET_ROOM_TITLE,
  INVOKE_CALL_COMMAND,
  INVOKE_START_LIVE,
  INVOKE_STOP_LIVE,
}

export default JEvent
