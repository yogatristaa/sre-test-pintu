FROM golang:alpine AS builder

WORKDIR /app

COPY . .

RUN go build -o main main.go


FROM alpine

WORKDIR /app

COPY --from=builder /app/main /app/main

EXPOSE 8080

CMD ["./main"]