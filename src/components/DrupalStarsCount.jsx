import React from 'react';
import site from '../../content/site.yml';

export default function DrupalStarsCount() {
  return (
    <img
      alt="Drupal stars count"
      src={`https://img.shields.io/badge/dynamic/json.svg?style=social&label=Star&uri=https%3A%2F%2Fwww.drupal.org%2Fapi-d7%2Fnode.json%3Fnid%3D${
        site.projects.drupal.hn.nid
      }&query=list%5B0%5D.flag_project_star_user.length&size=large&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABSlBMVEUAAAAjd6oAXZYseqwAaasAXpgAXJV1q8wAZaMAXZdJjbfP4%2FAAbK4AX5pOk70AXpcAXJR%2BttgAX5oAUIEAY6AAVIcAaKkAV4sAa60AV4sSYpIAaqqErcYAZKFsnbsAXpcAZaPd6O8xdZ0AVooAWI4ZZZMAV4sAVok2fKQAVYgATn0AV4sAWI0AV4shbJk2eaIOXo8AUoR5tdrW6PMniMQAc7oAb7Tz%2BfyEu9%2Fr9Pnk8PhXo9IBc7oAbrGRw%2BIbgsEAYJsAbrIAWY8AcrgAXZYAWY4KeLxorNa%2B2%2B2AudwghMIAcbYAX5kaaZl0pMGBudz%2F%2F%2F%2F%2B%2Fv6kyuIye6iMtMz3%2Bfva6vTu8%2FecvtP2%2BfsAcbeCudvV4%2BxuoL5KiK5kmrosdaHY5e0CWo4tdqE3fKYQY5VBg6ooc58bapkOYZNblLZ7qcRQjbF1pcHYMYAeAAAAMnRSTlMA6DWQ9z0e5c8vY%2F79bZJwFf3tEryH6bf84vLi36u1K%2FX9OUP8ekfg9HoXerLl786YItMRCf8AAAABYktHRFDjbky8AAAAB3RJTUUH4gMJBC8Itj498AAAALpJREFUGNNjYIAARiYGFMBsxMKKxGVjNzYxNePghPG5uM0tTIGAhxfC57O0srYBCZja8oP4AoJ29qZQICQMFBAxRQAHUaCAGILv6CQOFJCA851dXCWBAjympm7uHp5ept4%2Bvn5SQAFpU1P%2FgICAwKDgkNAAGaCArKlpGFAgIDwiMiBADiggrxAVHRAQExsXn5CoqARyiLJKUnKKa2paekamKsSpauqurlnZObkamjDPaGnr6OrpGxiC2ABLiCblmoMpuwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMy0wOVQwNDo0NzowOC0wNTowMP3Drp0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDMtMDlUMDQ6NDc6MDgtMDU6MDCMnhYhAAAAAElFTkSuQmCC`}
    />
  );
}
