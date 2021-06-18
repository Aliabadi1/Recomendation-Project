import bs4
from bs4 import BeautifulSoup
import requests
import re

def parseAnime(anime):
    d = {}
    r = requests.get(anime)
    soup  = BeautifulSoup(r.content, "lxml")

    td = soup.find_all('div', class_='stats-block po-r clearfix')
    try:
        score = td[0].find('div', class_='score-label score-8').text
    except:
        score = None
    if score is None:
        try:
            score = td[0].find('div', class_='score-label score-9').text
        except:
            score = None
    if score is None:
        try:
            score = td[0].find('div', class_='score-label score-7').text
        except:
            score = None
    if score is None:
        try:
            score = td[0].find('div', class_='score-label score-6').text
        except:
            score = None
    if score is None:
        try:
            score = td[0].find('div', class_='score-label score-5').text
        except:
            score = None
    try:
        release_date = td[0].find('div', class_='information-block di-ib clearfix').text
    except:
        return None
    genres = soup.find_all('span', itemprop='genre')
    i = 0
    lst = []
    for i in range(len(genres)):
        lst.append(genres[i].text)

    b = soup.find_all('div', class_='spaceit po-r js-statistics-info di-ib')
    a = b[0].text.split('\n')
    for x in a:
        if "#" in x:
            j = x.find("#")
            rank = x[j+1:-1]
    synonyms = soup.find_all('div', class_="spaceit_pad")
    lst_names = []
    lst_names.append(str(synonyms[0]).split('/')[1][5:-4])
    lst_names.extend((str(synonyms[1]).split('/')[1][5:-4]).split(','))
    d["genres"] = lst
    if score is not None:
        d["score"] = score
    else:
        d['score'] = 'tba'
    d["release_info"] = release_date
    try:
        d["rank"] = rank
    except:
        d["rank"] = 'TBA'
    return d, lst_names

def parsePage(x):
    d = {}
    temp_link = "https://myanimelist.net/topanime.php?type=bypopularity&limit="
    #parses a page
    r = requests.get(temp_link + str(x))
    soup = BeautifulSoup(r.content, "lxml")
    for link in soup.find_all('a'):
        temp = link.get('href')
        if temp is not None:
            reg = re.search("^https://myanimelist.net/anime/\d+/[^\/]+$", temp)
            if reg is not None and reg.group is not None:
                tup = parseAnime(reg.group())
                if tup is None:
                    continue
                for name in tup[1][:]:
                    d[name] = tup[0]
    return d
                    

