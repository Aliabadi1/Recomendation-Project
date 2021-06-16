from shows.models import Show
from shows.webscapper import parsePage, parseAnime
def parse(x):
    showsDict = parsePage(x)
    for z in showsDict:
        s = Show(title=z,genres=showsDict[z]['genres'],score=showsDict[z]['score'],releaseInfo=showsDict[z]['release_info'],rank=showsDict[z]['rank'])
        if not Show.objects.all().filter(title=z):
            s.save()


def deleteall():
    Show.objects.all().delete()