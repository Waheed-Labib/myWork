function getBreakTimeFromLS() {
    const breakTime = localStorage.getItem('break-time');
    if (breakTime) return breakTime
}

export default getBreakTimeFromLS