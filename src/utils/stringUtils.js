export default class stringUtils {
  static stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  static stringAvatar(name) {
    return {
      sx: {
        bgcolor: this.stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  static convertSeconds(sec) {
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    if (isNaN(m) || isNaN(s)) {
      m = 0;
      s = 0;
    }
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }
}
