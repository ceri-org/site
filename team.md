---
title: Meet the Team
layout: default
---

<section id="team" class="team-clean">
    <div class="container">
        {% for committee in site.data.team %}
        <div class="col-10 offset-1 text-center">
            <div class="intro">
                <h2 class="text-center" style="margin-bottom: 0px;">{{ committee.committee }}</h2>
            </div>
            <p></p>
        </div>
        <div class="row people">
            {% for member in committee.members%}
            <div class="col-md-6 col-lg-4 item"><img class="rounded-circle" src="/img/{{ member.image }}" style="width: 160px">
                <h3 class="name">{{ member.name }}<br></h3>
                <p class="title">{{ member.role }}</p>
                <p class="description" style="color: #000;" markdown="1">{{ member.bio }}<br></p>
            </div>
            {% endfor %}
        </div>
        {% endfor %}
    </div>
</section>