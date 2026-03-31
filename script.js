

const SOCIAL_MEDIA_LINKS = [
  {
    name: "Twitter",
    url: "#",
    ariaLabel: "Share on Twitter",
    img: "./images/icon-twitter.svg",
    className: "card__share-popover-link"
  },
  {
    name: "Facebook",
    url: "#",
    ariaLabel: "Share on Facebook",
    img: "./images/icon-facebook.svg",
    className: "card__share-popover-link"
  },
  {
    name: "Pinterest",
    url: "#",
    ariaLabel: "Share on Pinterest",
    img: "./images/icon-pinterest.svg",
    className: "card__share-popover-link"
  }
]

const sharePopover = document.getElementById("share-popover")
const shareButton = document.getElementById("share-button")
const shareButtonClose = document.getElementById("share-button-close")
const shareLinkList = document.getElementById("link-list")


// EVENTS
const OPEN_CLASS = "is-open"

if (sharePopover && shareButton && shareButtonClose && shareLinkList) {
  const setSharePopoverState = (isOpen) => {
    sharePopover.classList.toggle(OPEN_CLASS, isOpen)
    shareButton.setAttribute("aria-expanded", String(isOpen))
    shareButtonClose.setAttribute("aria-expanded", String(isOpen))
  }

  const handleSharePopover = () => {
    const isOpen = sharePopover.classList.contains(OPEN_CLASS)
    setSharePopoverState(!isOpen)
  }

  shareButton.addEventListener("click", handleSharePopover)
  shareButtonClose.addEventListener("click", handleSharePopover)

  // RENDERING SOCIAL MEDIA LINKS
  shareLinkList.innerHTML = SOCIAL_MEDIA_LINKS.map(({ name, className, url, ariaLabel, img }) => `
    <li>
      <a
        class="${className}"
        href="${url}"
        aria-label="${ariaLabel}"
        title="${name}"
      >
        <img
          src="${img}"
          alt=""
          aria-hidden="true"
        />
      </a>
    </li>
  `)
    .join("")
}
