echo $args argumente

$verz='Z:\home\tk\cv'

$datei=gci $verz |sort LastWriteTime| select -last 1

$dat= $args
$datei=gci "$verz/$dat.md"

$output="$verz/$dat.html"

pandoc.exe -s $datei.fullname -o $output
Start-Process chrome.exe $output