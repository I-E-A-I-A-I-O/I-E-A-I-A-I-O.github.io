function changeColor(IDs, Colors, Start)
{
    i = Start;

    for (n = 0; n < IDs.length; n++)
    {
        document.getElementById(IDs[n]).style.color = Colors[i];

        i++;
        if (i > Colors.length - 1)
            i = 0;
    }
}