function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6I9jMlHNCcH":
        Script1();
        break;
      case "6ic6gOwIIyq":
        Script2();
        break;
      case "6dKvZKRPGru":
        Script3();
        break;
  }
}

function Script1()
{
  const audio = document.getElementById("bgSong");
audio.src="song/backsound.mp3";
audio.load();
audio.play();
}

function Script2()
{
  const audio = document.getElementById("bgSong");
audio.play()
}

function Script3()
{
  const audio = document.getElementById("bgSong");
audio.pause()
}

