# encoding: utf-8
import sys
from workflow import Workflow, ICON_WEB, web
def main(wf):
    url = 'https://hacker-news.firebaseio.com/v0/topstories.json'
    r = web.get(url)
    r.raise_for_status()

    ids = r.json()[:10]

    for id in ids:
      response = web.get('https://hacker-news.firebaseio.com/v0/item/%s.json' % id)
      response.raise_for_status()
      story = response.json()
      wf.add_item(title=story['title'],
                  subtitle=story['url'],
                  arg=story['url'],
                  icon=ICON_WEB,
                  valid=True)
    wf.send_feedback()

if __name__ == u"__main__":
    wf = Workflow()
    sys.exit(wf.run(main))