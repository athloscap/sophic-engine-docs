export const httpStatusTableColumns = [
    {
        "key": "status",
        "header": "Status",
        render: (value) => <code className="font-mono text-[13px] font-regular">{value}</code>},
    {"key": "description", "header": "Description"},
];

export const httpStatuses = [
    {
        status: "200",
        description: "Everything worked as expected."
    },
    {
        status: "201",
        description: "Everything worked as expected and a new resource was created. This is typically used for create operations (POST requests)."
    },
    {
        status: "400",
        description: "The request was unacceptable, often due to a validation error."
    },
    {
        status: "401",
        description: "No valid credentials provided."
    },
    {
        status: "403",
        description: "The provided credentials don't have permissions to perform the request."
    },
    {
        status: "404",
        description: "The requested resource doesn't exist."
    },
    {
        status: "500",
        description: "Something went wrong on our end."
    }
]

export const errorCodesTableColumns = [
    {"key": "code", "header": "Code", render: (value) => <code className="font-mono text-[13px] font-regular">{value}</code>},
    {"key": "detail", "header": "Description"},
]

export const errorCodes = [
    {
        "code": "buy_order_forbidden",
        "detail": "Buy orders are not enabled for this account."
    },
    {
        "code": "client_request_id_too_long",
        "detail": "The Client-Request-Id header value exceeds the maximum length."
    },
    {
        "code": "currency_not_supported",
        "detail": "The requested currency is not supported for this account."
    },
    {
        "code": "deposit_advance_forbidden",
        "detail": "Deposit advances are not enabled for this account."
    },
    {
        "code": "deposit_forbidden",
        "detail": "Deposits are not enabled for this account."
    },
    {
        "code": "duplicate_funding_account",
        "detail": "A funding account with the same IBAN and bank code already exists for this account."
    },
    {
        "code": "email_forbidden",
        "detail": "The email address is not allowed for this operation."
    },
    {
        "code": "forbidden",
        "detail": "The credentials are not authorized to perform this operation."
    },
    {
        "code": "idempotency_key_too_long",
        "detail": "The Idempotency-Key header value exceeds the maximum length."
    },
    {
        "code": "instrument_not_trading",
        "detail": "The instrument is not currently tradable."
    },
    {
        "code": "insufficient_funds",
        "detail": "The account does not have sufficient available cash balance."
    },
    {
        "code": "insufficient_scope",
        "detail": "The token does not have the required scope for this operation."
    },
    {
        "code": "insufficient_units",
        "detail": "The account does not have sufficient available units to sell."
    },
    {
        "code": "invalid_client",
        "detail": "The OAuth client is invalid, inactive, or not authorized for this request."
    },
    {
        "code": "invalid_param",
        "detail": "A parameter is invalid."
    },
    {
        "code": "invalid_request",
        "detail": "The request parameters are invalid."
    },
    {
        "code": "invalid_token",
        "detail": "The authentication credentials are invalid or expired."
    },
    {
        "code": "invalid_trading_currency",
        "detail": "The instrument is not tradable in the requested currency."
    },
    {
        "code": "method_not_allowed",
        "detail": "This HTTP method is not allowed for this endpoint."
    },
    {
        "code": "missing_param",
        "detail": "A required parameter is missing."
    },
    {
        "code": "missing_price",
        "detail": "Pricing data is not available for this operation."
    },
    {
        "code": "missing_token",
        "detail": "The request is missing authentication credentials."
    },
    {
        "code": "not_found",
        "detail": "The requested resource does not exist."
    },
    {
        "code": "order_cancel_forbidden",
        "detail": "The order cannot be cancelled in its current state."
    },
    {
        "code": "order_fill_forbidden",
        "detail": "The order cannot be marked as filled in its current state."
    },
    {
        "code": "payment_completion_forbidden",
        "detail": "The payment cannot be completed in its current state."
    },
    {
        "code": "professional_trader_required",
        "detail": "This operation requires a professional trader authorization."
    },
    {
        "code": "refund_exceeds_refundable_amount",
        "detail": "The requested refund amount exceeds the refundable amount."
    },
    {
        "code": "sell_order_forbidden",
        "detail": "Sell orders are not enabled for this account."
    },
    {
        "code": "server_error",
        "detail": "An unexpected internal error occurred."
    },
    {
        "code": "withdrawal_forbidden",
        "detail": "Withdrawals are not enabled for this account."
    }
]