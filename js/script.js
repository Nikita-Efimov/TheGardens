function start_()
{
	try {
		var p = document.getElementsByTagName('iframe')
		if (p[0].contentWindow.document.getElementsByTagName('body')[0].innerText == 'Hello world')
			return
	} catch(e)
	{

	}

	document.body.innerText = ''
}
